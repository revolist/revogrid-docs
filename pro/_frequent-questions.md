---
sidebar: false
aside: true
editLink: false
footer: true
prev: false
next: false
layout: custom
---

<style lang="scss" scoped>
    .grid {
        display: grid;
        margin-top: 2rem;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        details {
            margin: 0;
        }
    }

    details[dashed] {
        background-color: transparent;
        border: 1px dashed var(--vp-c-success-3);
    }
</style>

<div class="description">

## Frequently asked questions

</div>

<div class="grid">

::: details How many developer licenses do I need?

The number of licenses required must match the maximum number of concurrent developers contributing to the front-end code.

**Examples:**

- **Example 1**: A project has 3 front-end developers and 10 back-end developers. If only the 3 front-end developers work with RevoGrid Pro, you need 3 licenses.

- **Example 2**: A UI team with 2 front-end developers uses RevoGrid Pro as part of a shared library for multiple apps. If the apps have 5 and 3 front-end developers, you will need 10 licenses (2 + 5 + 3).

For more details, refer to the relevant clause in the [EULA](./policies/license.md#_3-4-1-Required-quantity-of-licenses).
:::

::: details Am I allowed to use the product after the update entitlement expires?

Yes, you can continue using the product in production environments after the update entitlement expires.

**However**:
- You need an active subscription to continue development.
- Updates, new features, and technical support require a valid subscription.

To renew, contact [sales](mailto:contact@revolist.eu).

:::



::: details Do developers have to be named?

No. Licenses are transferable between developers when team members join or leave projects.

We trust that your team will not exceed the number of licensed developers.

:::


::: details What is the policy on redistributing the software?

RevoGrid Pro licenses are royalty-free for:
- Internal company solutions.
- Hosted applications.
- Commercial solutions deployed to end users.

If sublicensing is needed, it must be part of a larger work, and sublicenses must follow the same [EULA terms](./policies/license.md).

Examples:

- **Example 1:** Agency ‘A’ builds apps for two clients and sublicenses RevoGrid components. No extra fee is needed if the apps are used without source modification.

- **Example 2:** If clients modify the application themselves, they must purchase their own licenses.

For custom use cases or licensing concerns, please [contact sales](mailto:contact@revolist.eu).
:::

::: details Do you offer discounts to educational and non-profit organizations?

Yes, we offer a 50% discount for students, instructors, non-profits, and charities.

To qualify:
- Provide proof of affiliation (e.g., an email from an official account).

[Contact sales](mailto:contact@revolist.eu) to apply.
:::


::: details Why must we license developers not using the software directly?

All developers contributing to a project using RevoGrid Pro must be licensed, even if they only use it indirectly (e.g., via a wrapper library).

This ensures fair licensing and helps teams comply easily. The per-developer price is adjusted to account for this broader requirement.
Learn more in the [EULA](./policies/license.md).

:::



::: details Need Help? {open dashed}

If you have questions or need support, reach out:
- For sales-related inquiries: [contact sales](mailto:contact@revolist.eu).
- For product issues, [open a GitHub issue](https://github.com/revolist/revogrid/issues).

:::
</div>