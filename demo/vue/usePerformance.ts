// usePerformance.ts
import { ref, onUnmounted } from 'vue';

export function usePerformance() {
  const renderTime = ref<number | null>(null);
  const memoryUsage = ref<{
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  } | null>(null);

  let observer: PerformanceObserver | null = null;
  const cleanupCallbacks: Array<() => void> = [];

  const addCleanup = (callback: () => void) => {
    cleanupCallbacks.push(callback);
  };

  onUnmounted(() => {
    cleanupCallbacks.splice(0).forEach((callback) => callback());
  });


const fps = ref<number | null>(0);

const measureScrollFPS = (elementSelector: string) =>{
  const element = document.querySelector(elementSelector);
  if (!element) return;
  let lastTimestamp = 0;
  let frameCount = 0;
  let isScrolling = false;

  const calculateFPS = (timestamp: DOMHighResTimeStamp) => {
    if (lastTimestamp) {
      const delta = timestamp - lastTimestamp;

      if (isScrolling) {
        frameCount++;
        if (delta >= 1000) { // Calculate FPS every second
          fps.value = frameCount;
          frameCount = 0;
          lastTimestamp = timestamp;
        }
      }
    } else {
      lastTimestamp = timestamp;
    }

    if (isScrolling) {
      requestAnimationFrame(calculateFPS);
    }
  };

  const onScroll = (): void => {
    if (!isScrolling) {
      isScrolling = true;
      frameCount = 0;
      lastTimestamp = 0;
      requestAnimationFrame(calculateFPS);
    }

    clearTimeout((element as any)._scrollTimeout);
    (element as any)._scrollTimeout = setTimeout(() => {
      isScrolling = false;
      fps.value = 0; // Reset FPS when scrolling stops
    }, 200); // Assume scrolling stops if no events for 200ms
  };

  const attachScrollListener = () => {
    const scrollElement = element.querySelector('revogr-viewport-scroll.rgCol .vertical-inner');
    scrollElement?.addEventListener('scroll', onScroll);
  };

  element.addEventListener('aftergridrender', attachScrollListener);

  addCleanup(() => {
    element.removeEventListener('aftergridrender', attachScrollListener);
    element.querySelector('revogr-viewport-scroll.rgCol .vertical-inner')?.removeEventListener('scroll', onScroll);
    clearTimeout((element as any)._scrollTimeout);
  });
}


  // Measure render time
  const measureRenderTime = (elementSelector: string) => {
    const element = document.querySelector(elementSelector);
    if (!element) return;

    let start = performance.now();
    element.addEventListener('beforegridrender', () => {
        start = performance.now();
    })
    element.addEventListener('aftergridrender', () => {
      const end = performance.now();
      renderTime.value = end - start;
    //   console.log(`Render Time: ${renderTime.value.toFixed(2)}ms`);
    });
  };

  // Measure memory usage
  const measureMemoryUsage = () => {
    try {
      // @ts-ignore
      if (performance.memory) {
        // @ts-ignore
        const { usedJSHeapSize, totalJSHeapSize, jsHeapSizeLimit } = performance.memory;
        memoryUsage.value = { usedJSHeapSize, totalJSHeapSize, jsHeapSizeLimit };
      //   console.log('Memory Usage:', memoryUsage.value);
      } else {
        console.warn('Memory measurement is not supported in this browser.');
      }
    } catch (error) {
      console.error('Error measuring memory usage:', error);
    }
  };

  // Periodic memory monitor
  const startMemoryMonitor = (interval = 5000) => {
    const intervalId = setInterval(() => measureMemoryUsage(), interval);

    // Cleanup on unmount
    addCleanup(() => {
      clearInterval(intervalId);
    });
  };

  // Generic performance observer
  const observePerformance = (callback: (entry: PerformanceEntry) => void) => {
    observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        callback(entry);
      }
    });
    observer.observe({ entryTypes: ['measure', 'mark', 'paint'] });

    // Cleanup on unmount
    addCleanup(() => {
      observer?.disconnect();
    });
  };

  return {
    renderTime,
    scrollFPS: fps,
    memoryUsage,
    measureRenderTime,
    measureScrollFPS,
    measureMemoryUsage,
    startMemoryMonitor,
    observePerformance,
  };
}
