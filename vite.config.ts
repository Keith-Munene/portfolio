/**

* vite.config.ts
*
* Main configuration file for the Vite build tool.
* Controls plugins, path aliases, dev server behavior, etc.
  */

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
/**

* Vite plugins extend the build tool.
* The React plugin enables:
* * Fast Refresh (instant component updates)
* * JSX support
* * React dev optimizations
    */
    plugins: [react()],

resolve: {
/**
* Path alias
*
* Allows imports like:
*   import Hero from "@/components/sections/Hero"
*
* instead of:
*   import Hero from "../../../components/sections/Hero"
*/
alias: {
"@": path.resolve(__dirname, "./src"),
},
},
})
