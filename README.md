# Steps to reproduce

1. Clone this repo && `cd looker-component-test`.
2. Run `yarn` to install dependencies.
3. Run `yarn tsc`

You should see an error like this:
```bash
src/index.tsx:5:6 - error TS2740: Type '{ children: Element; content: Element; }' is missing the following properties from type 'Pick<MenuProps, "sizes" | "width" | "height" | "cite" | "data" | "form" | "slot" | "span" | "style" | "summary" | "title" | "pattern" | "dir" | "accessKey" | "children" | ... 363 more ... | "disableScrollLock">': sizes, width, height, cite, and 353 more.

5     <Menu content={<div>Content</div>}>
       ~~~~


Found 1 error in src/index.tsx:5
```
