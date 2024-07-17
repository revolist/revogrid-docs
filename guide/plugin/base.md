
```typescript
/**
 * Base layer for plugins
 * Provide minimal starting core for plugins to work
 * Extend this class to create plugin
 */
export class BasePlugin implements PluginBaseComponent {
  readonly subscriptions: Record<string, (...args: any[]) => void> = {};

  constructor(public revogrid: HTMLRevoGridElement, public providers: PluginProviders) {}

  /**
   * Subscribe to an event in the RevoGrid component.
   * @param eventName - event name to subscribe to in RevoGrid component (e.g. 'beforeheaderclick')
   * @param callback - callback function for the event
   */
  addEventListener(eventName: string, callback: (e: CustomEvent) => void): void;

  /**
   * Subscribe to a property change in the RevoGrid component.
   * You can return false in the callback to prevent the default value set.
   * @param prop - property name
   * @param callback - callback function
   * @param immediate - trigger callback immediately with current value
   */
  watch<T extends any>(
    prop: string,
    callback: (arg: T) => boolean | void,
    config?: Partial<WatchConfig>
  ): void;

  /**
   * Remove an event listener.
   * @param eventName - event name
   */
  removeEventListener(eventName: string): void;

  /**
   * Emit an event from the RevoGrid component.
   * The event can be cancelled by calling event.preventDefault() in the callback.
   * @param eventName - event name
   * @param detail - event detail
   */
  emit(eventName: string, detail?: any): CustomEvent;

  /**
   * Clear all subscriptions.
   */
  clearSubscriptions(): void;

  /**
   * Destroy the plugin and clear all subscriptions.
   */
  destroy(): void;
}
```