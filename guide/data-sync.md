# Data Synchronization

## Prerequisites

We assume that you have already set up the basic version of RevoGrid and are familiar with configuring the `source` and `columns`. It is crucial to always mutate the data you pass to the grid, as this ensures optimal performance.

## Understanding Data Synchronization

RevoGrid offers several popular approaches for working with data:

### Grid-Centric Data Management: 
   - You can work with the grid and, in the end, request the data directly from it.
   
      This approach allows you to subscribe to the `afteredit` event, which is triggered after a cell edit or range edit occurs. You can retrieve the current data from the `source` whenever you need it.

### Source-Centric Data Management: 
   - This method involves managing your data independently and handling events before cell editing.
      
      In this case, you need to pass your source array to the grid each time an edit occurs, which will trigger a grid re-render to display the updated data.
      
      As part of the Pro version, we provide the **EventManagerPlugin**, which consolidates range, clipboard, and cell edit events into a single common event called `gridedit`. You can utilize this plugin to catch the event, modify it, or even create your own custom event manager.


### Pagination and Dynamic Data Loading: 
   - These two features are two sides of the same coin:
        - Pagination allows you to break your data source into manageable parts and load data from a server or cache for each page. For more information, check out Pro version's the [**PaginationPlugin** and its documentation](./pagination).
        - Dynamic data loading is an advanced version of pagination that loads data in chunks based on user interactions, such as scrolling, without displaying a page panel.
   
   With this approach, you can combine the two methods mentioned above to work with a complete or partial grid dataset, updating the data and passing it to the grid as needed.
   
## Best Practices

For best practices on data management and manipulation, please refer to our [Best Practices Guide](./patterns). This section will help you optimize your grid's performance and usability.
