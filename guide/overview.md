---
title: RevoGrid Overview
---

<script setup>
import Grid from '@/demo/vue/DemoHR.vue'
</script>
<style lang="scss" scoped>
.example {
    max-width: 100%;    
}
:deep() {
    .demo-page-wrapper .demo-container {
        width: 100%;
    }
}
</style>

# Overview

So, you have an app that manages intensive datasets and you might think it’s straightforward enough to handle on your own. After all, implementing virtual scrolling might seem like all it takes. 

> But what happens when your needs grow?

Suppose you want to [`pin`](./defs.md#Row-Pin-Freeze) a row at the top or bottom. [`Add a column`](./defs.md#Column) that also needs to be pinned. And then start [`grouping`](./defs.md#Row-Grouping) these elements. Soon, you might find yourself needing [`cell focus`](./defs.md#Focus) and [`range selections`](./defs.md#Range). This is where the complexity increases significantly.

In scenarios like this, maintaining performance while adding sophisticated grid functionalities can become difficult.

<div class="example">
<Grid />
</div>

## Motivation

Confronted with vast data streams, we realized the limitations of existing solutions: while on-market 3rd-party libraries offered temporary respite, they came with their own set of challenges—prompting us to think beyond conventional method:

> Our goal is to create a  truly reactive datagrid core, one that could stand shoulder to shoulder with any framework while being universally accessible for developers and organizations alike. It's designed to handle the most demanding data without compromising on performance, ensuring that your applications run smoothly and efficiently.


## Magic behind the scene

`RevoGrid` is  built on top of [StencilJS](https://stenciljs.com/) (a compiler for building fast web apps using Web Components), leveraging the power of a reactive DOM to ensure optimal performance and responsiveness. Its architecture is *designed to handle large datasets* with ease, providing a seamless user experience even in data-intensive applications.

This approach allows RevoGrid to be **framework-agnostic**, ensuring developers can integrate it into any project regardless of the underlying technology stack.

<!--@include: ./parts/_reactive.md-->


## Framework Native Support

We have built native support for all popular frameworks, enabling you to integrate native elements directly inside the grid cells. For example, you can embed Vue/React/Angular components within RevoGrid, allowing for a rich and interactive data grid experience.

To use native elements in your grid, simply utilize our providers. This feature enhances flexibility and allows you to leverage the unique capabilities of each framework while maintaining a unified grid experience.

For more detailed information on implementing this functionality, be sure to read the relevant sections of our documentation.

<!--@include: ./parts/_framework.md-->


## Why to choose?

`RevoGrid` is an essential tool for developers aiming to build high-quality, data-intensive applications.

RevoGrid distinguishes itself from other data grids with its unwavering commitment to user experience. Our `advanced scrolling` technology ensures seamless navigation through vast datasets—this finely tuned interaction is what sets us apart. Additionally, we support native behavior for `optimal out-of-browser performance` and features rapid cell rendering and updates, ensuring the application remains responsive at all times. These capabilities make us not just different, but superior in facilitating an efficient and smooth user interface.

::: info If you find yourself constantly pondering over questions like

- Why is my application slowing down?
- Should I enable paging to speed it up?
- How can I manage such large volumes of data efficiently?
- It looks like an Excel sheet; can it perform well?
:::
<Badge type="tip" text="Then, RevoGrid is your solution!" />


Its highly competitive feature set and performance can be applied in various areas and industries. Here are our real-case scenarios where you can improve data management and user experience to a granular level.



## Where to apply?

- ### Financial Modeling and Analysis

Financial institutions and fintech startups can leverage RevoGrid for complex financial modeling and analysis. The grid's performance in handling large volumes of data, coupled with its support for custom cell formatting and editing, makes it ideal for real-time financial analysis, budgeting, and forecasting.

- ### Project Management Tools

Project management software can benefit from RevoGrid's capabilities to track tasks, deadlines, and progress across multiple projects. The grid's flexibility and performance make it suitable for creating detailed project dashboards that enhance team collaboration and efficiency.

- ### E-Commerce Dashboards

E-commerce platforms can use RevoGrid to manage large inventories, track orders, and analyze customer data. The grid's efficient data rendering and manipulation capabilities allow for real-time updates and seamless user interactions, crucial for monitoring sales trends and inventory levels.

- ### Healthcare Data Management

Healthcare applications can benefit from RevoGrid's ability to handle large datasets, such as patient records, appointment schedules, and treatment histories. The grid's sorting, filtering, and editing features enable healthcare professionals to quickly access and manage patient information, improving the efficiency of care delivery.

- ### Educational Platforms

Educational software, including learning management systems (LMS), can use RevoGrid to display and manage student data, course materials, and grades. The grid's customizable nature allows for the creation of intuitive interfaces that cater to the diverse needs of educators and students.

- ### Real Estate Portals

Real estate platforms can utilize RevoGrid to display property listings, including detailed information such as images, descriptions, prices, and agent contacts. The grid's virtual scrolling and efficient data rendering ensure a smooth user experience, even with thousands of listings.

- ### Logistics and Supply Chain Management

For logistics and supply chain applications, RevoGrid can manage and display shipping schedules, inventory levels, and transport routes. Its high performance and dynamic data manipulation capabilities support the complex, real-time data needs of logistics operations.


## Find guides for your framework

<!--@include: ./parts/_framework.md-->