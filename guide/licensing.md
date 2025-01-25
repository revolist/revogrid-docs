# Licensing

RevoGrid is an open-core, MIT-licensed Data Grid library. Purchase a [commercial license](/pro) for advanced features and support.


## MIT vs. Commercial licenses

The Revolist team has been building MIT-licensed components and we’re committed to the continued advancement of our open-source libraries. Anything we release under an MIT license will remain MIT-licensed forever.

We offer commercial licenses to developers who need the most advanced components and features that can’t reasonably be maintained by the open-source community alone. These licenses make it possible for us to support a full-time staff of engineers.

Rest assured that when we release features commercially, it’s only because we believe you won’t find a better MIT-licensed alternative anywhere else.

See the [Pricing page](/pro) for a detailed feature comparison.

## Plans

### Community plan

The free Community version of RevoGrid contains components and features that we believe are maintainable by contributions from the open-source community. It’s published under an MIT license and it’s free forever.

### Pro

The Pro version is available under a commercial license and is distributed through an [advanced portal](https://pro.rv-grid.com/) aimed at providing comprehensive user support and extended documentation. [This portal](https://pro.rv-grid.com/) offers users exclusive access to detailed guides, use case examples, troubleshooting, and more to help streamline the development process.

#### Light plan

RevoGrid Pro expands on the Community version with more advanced features and functionality. The Pro version comes with cell merge, formula, charts, and excel export; you also gain access to the advanced column stretching, and expandable Tree View.

The Pro version is available under a commercial license — visit the [Pricing page](/pro) for details.

#### Advanced plan

Unlocks the most advanced features of the RevoGrid, including AI, Pivoting and premium support, as well as everything offered in the Pro Light plan.

The Pro Advanced version is available under a commercial license—visit the [Licensing page](/pro/policies/license) for details.


## Upgrading

The npm packages of any given plan are an extension for the Community version. To upgrade, you must install the respective paid package and add all imports accordingly.

Below are upgrading scenarios:

### From Community to Pro

Install the Pro package, then update all imports accordingly:

```typescript
import RevoGrid from '@revolist/vue3-datagrid';
+import { PivotPlugin } from '@revolist/revogrid-pro';
```

### From Pro to Pro Advanced

Contact us to upgrade to Pro Advanced.

### Evaluation (trial) licenses

As of now, we don’t provide a full evaluation for Pro and Pro Advanced components. However, we do offer access to our [Pro portal](https://pro.rv-grid.com/), where users can register and try all Pro features.

Additionally, we provide a [playground](https://pro.rv-grid.com/demo/playground) where users can try all features with their own code.

For more details on the license quantity, see the relevant clause in the [EULA](https://rv-grid.com/pro/policies/license).