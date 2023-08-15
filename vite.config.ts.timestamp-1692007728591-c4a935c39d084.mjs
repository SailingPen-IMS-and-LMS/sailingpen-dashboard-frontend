// vite.config.ts
import path from "node:path";
import { defineConfig } from "file:///D:/UCSC/Academics/3_Year_Sem_1/Group%20Project/1REPO/Codebase/sailingpen-dashboard-frontend/node_modules/vite/dist/node/index.js";
import Vue from "file:///D:/UCSC/Academics/3_Year_Sem_1/Group%20Project/1REPO/Codebase/sailingpen-dashboard-frontend/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Pages from "file:///D:/UCSC/Academics/3_Year_Sem_1/Group%20Project/1REPO/Codebase/sailingpen-dashboard-frontend/node_modules/vite-plugin-pages/dist/index.mjs";
import generateSitemap from "file:///D:/UCSC/Academics/3_Year_Sem_1/Group%20Project/1REPO/Codebase/sailingpen-dashboard-frontend/node_modules/vite-ssg-sitemap/dist/index.js";
import Layouts from "file:///D:/UCSC/Academics/3_Year_Sem_1/Group%20Project/1REPO/Codebase/sailingpen-dashboard-frontend/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import Components from "file:///D:/UCSC/Academics/3_Year_Sem_1/Group%20Project/1REPO/Codebase/sailingpen-dashboard-frontend/node_modules/unplugin-vue-components/dist/vite.mjs";
import AutoImport from "file:///D:/UCSC/Academics/3_Year_Sem_1/Group%20Project/1REPO/Codebase/sailingpen-dashboard-frontend/node_modules/unplugin-auto-import/dist/vite.js";
import Icons from "file:///D:/UCSC/Academics/3_Year_Sem_1/Group%20Project/1REPO/Codebase/sailingpen-dashboard-frontend/node_modules/unplugin-icons/dist/vite.mjs";
import IconsResolver from "file:///D:/UCSC/Academics/3_Year_Sem_1/Group%20Project/1REPO/Codebase/sailingpen-dashboard-frontend/node_modules/unplugin-icons/dist/resolver.mjs";
import VueI18n from "file:///D:/UCSC/Academics/3_Year_Sem_1/Group%20Project/1REPO/Codebase/sailingpen-dashboard-frontend/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import Unocss from "file:///D:/UCSC/Academics/3_Year_Sem_1/Group%20Project/1REPO/Codebase/sailingpen-dashboard-frontend/node_modules/unocss/dist/vite.mjs";
import VueMacros from "file:///D:/UCSC/Academics/3_Year_Sem_1/Group%20Project/1REPO/Codebase/sailingpen-dashboard-frontend/node_modules/unplugin-vue-macros/dist/vite.mjs";
import WebfontDownload from "file:///D:/UCSC/Academics/3_Year_Sem_1/Group%20Project/1REPO/Codebase/sailingpen-dashboard-frontend/node_modules/vite-plugin-webfont-dl/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\UCSC\\Academics\\3_Year_Sem_1\\Group Project\\1REPO\\Codebase\\sailingpen-dashboard-frontend";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__vite_injected_original_dirname, "src")}/`
    }
  },
  plugins: [
    VueMacros({
      plugins: {
        vue: Vue({
          include: [/\.vue$/]
        })
      }
    }),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ["vue"]
    }),
    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "vue-i18n",
        "@vueuse/head",
        "@vueuse/core"
      ],
      dts: "src/auto-imports.d.ts",
      dirs: [
        "src/composables",
        "src/stores"
      ],
      vueTemplate: true
    }),
    Components({
      extensions: ["vue"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "src/components.d.ts",
      resolvers: [
        IconsResolver({
          prefix: false
        })
      ]
    }),
    Icons(),
    Unocss(),
    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__vite_injected_original_dirname, "locales/**")]
    }),
    // https://github.com/feat-agency/vite-plugin-webfont-dl
    WebfontDownload(["https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap", "https://fonts.googleapis.com/css2?family=Norican&display=swap"])
  ],
  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: "async",
    formatting: "minify",
    crittersOptions: {
      reduceInlineStyles: false
    },
    onFinished() {
      generateSitemap();
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "~/styles/_mixins.scss";'
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxVQ1NDXFxcXEFjYWRlbWljc1xcXFwzX1llYXJfU2VtXzFcXFxcR3JvdXAgUHJvamVjdFxcXFwxUkVQT1xcXFxDb2RlYmFzZVxcXFxzYWlsaW5ncGVuLWRhc2hib2FyZC1mcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcVUNTQ1xcXFxBY2FkZW1pY3NcXFxcM19ZZWFyX1NlbV8xXFxcXEdyb3VwIFByb2plY3RcXFxcMVJFUE9cXFxcQ29kZWJhc2VcXFxcc2FpbGluZ3Blbi1kYXNoYm9hcmQtZnJvbnRlbmRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1VDU0MvQWNhZGVtaWNzLzNfWWVhcl9TZW1fMS9Hcm91cCUyMFByb2plY3QvMVJFUE8vQ29kZWJhc2Uvc2FpbGluZ3Blbi1kYXNoYm9hcmQtZnJvbnRlbmQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCBWdWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgUGFnZXMgZnJvbSAndml0ZS1wbHVnaW4tcGFnZXMnXHJcbmltcG9ydCBnZW5lcmF0ZVNpdGVtYXAgZnJvbSAndml0ZS1zc2ctc2l0ZW1hcCdcclxuaW1wb3J0IExheW91dHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWxheW91dHMnXHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXHJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXHJcbmltcG9ydCBJY29ucyBmcm9tICd1bnBsdWdpbi1pY29ucy92aXRlJ1xyXG5pbXBvcnQgSWNvbnNSZXNvbHZlciBmcm9tICd1bnBsdWdpbi1pY29ucy9yZXNvbHZlcidcclxuaW1wb3J0IFZ1ZUkxOG4gZnJvbSAnQGludGxpZnkvdW5wbHVnaW4tdnVlLWkxOG4vdml0ZSdcclxuaW1wb3J0IFVub2NzcyBmcm9tICd1bm9jc3Mvdml0ZSdcclxuaW1wb3J0IFZ1ZU1hY3JvcyBmcm9tICd1bnBsdWdpbi12dWUtbWFjcm9zL3ZpdGUnXHJcbmltcG9ydCBXZWJmb250RG93bmxvYWQgZnJvbSAndml0ZS1wbHVnaW4td2ViZm9udC1kbCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ34vJzogYCR7cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpfS9gLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBwbHVnaW5zOiBbXHJcbiAgICBWdWVNYWNyb3Moe1xyXG4gICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgdnVlOiBWdWUoe1xyXG4gICAgICAgICAgaW5jbHVkZTogWy9cXC52dWUkL10sXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vaGFubm9lcnUvdml0ZS1wbHVnaW4tcGFnZXNcclxuICAgIFBhZ2VzKHtcclxuICAgICAgZXh0ZW5zaW9uczogWyd2dWUnXSxcclxuICAgIH0pLFxyXG5cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Kb2huQ2FtcGlvbkpyL3ZpdGUtcGx1Z2luLXZ1ZS1sYXlvdXRzXHJcbiAgICBMYXlvdXRzKCksXHJcblxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLWF1dG8taW1wb3J0XHJcbiAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgaW1wb3J0czogW1xyXG4gICAgICAgICd2dWUnLFxyXG4gICAgICAgICd2dWUtcm91dGVyJyxcclxuICAgICAgICAndnVlLWkxOG4nLFxyXG4gICAgICAgICdAdnVldXNlL2hlYWQnLFxyXG4gICAgICAgICdAdnVldXNlL2NvcmUnLFxyXG4gICAgICBdLFxyXG4gICAgICBkdHM6ICdzcmMvYXV0by1pbXBvcnRzLmQudHMnLFxyXG4gICAgICBkaXJzOiBbXHJcbiAgICAgICAgJ3NyYy9jb21wb3NhYmxlcycsXHJcbiAgICAgICAgJ3NyYy9zdG9yZXMnLFxyXG4gICAgICBdLFxyXG4gICAgICB2dWVUZW1wbGF0ZTogdHJ1ZSxcclxuICAgIH0pLFxyXG5cclxuICAgIENvbXBvbmVudHMoe1xyXG4gICAgICBleHRlbnNpb25zOiBbJ3Z1ZSddLFxyXG4gICAgICAvLyBhbGxvdyBhdXRvIGltcG9ydCBhbmQgcmVnaXN0ZXIgY29tcG9uZW50cyB1c2VkIGluIG1hcmtkb3duXHJcbiAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvXSxcclxuICAgICAgZHRzOiAnc3JjL2NvbXBvbmVudHMuZC50cycsXHJcbiAgICAgIHJlc29sdmVyczogW1xyXG4gICAgICAgIEljb25zUmVzb2x2ZXIoe1xyXG4gICAgICAgICAgcHJlZml4OiBmYWxzZSxcclxuICAgICAgICB9KSxcclxuICAgICAgXSxcclxuICAgIH0pLFxyXG5cclxuICAgIEljb25zKCksXHJcblxyXG4gICAgVW5vY3NzKCksXHJcblxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ludGxpZnkvYnVuZGxlLXRvb2xzL3RyZWUvbWFpbi9wYWNrYWdlcy91bnBsdWdpbi12dWUtaTE4blxyXG4gICAgVnVlSTE4bih7XHJcbiAgICAgIHJ1bnRpbWVPbmx5OiB0cnVlLFxyXG4gICAgICBjb21wb3NpdGlvbk9ubHk6IHRydWUsXHJcbiAgICAgIGZ1bGxJbnN0YWxsOiB0cnVlLFxyXG4gICAgICBpbmNsdWRlOiBbcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2xvY2FsZXMvKionKV0sXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmVhdC1hZ2VuY3kvdml0ZS1wbHVnaW4td2ViZm9udC1kbFxyXG4gICAgV2ViZm9udERvd25sb2FkKFsnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXAnLCAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3JpY2FuJmRpc3BsYXk9c3dhcCddKSxcclxuICBdLFxyXG5cclxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdml0ZS1zc2dcclxuICBzc2dPcHRpb25zOiB7XHJcbiAgICBzY3JpcHQ6ICdhc3luYycsXHJcbiAgICBmb3JtYXR0aW5nOiAnbWluaWZ5JyxcclxuICAgIGNyaXR0ZXJzT3B0aW9uczoge1xyXG4gICAgICByZWR1Y2VJbmxpbmVTdHlsZXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIG9uRmluaXNoZWQoKSB7XHJcbiAgICAgIGdlbmVyYXRlU2l0ZW1hcCgpXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGNzczoge1xyXG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xyXG4gICAgICBzY3NzOiB7XHJcbiAgICAgICAgYWRkaXRpb25hbERhdGE6ICdAaW1wb3J0IFwifi9zdHlsZXMvX21peGlucy5zY3NzXCI7JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK2MsT0FBTyxVQUFVO0FBQ2hlLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxxQkFBcUI7QUFDNUIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sV0FBVztBQUNsQixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLGFBQWE7QUFDcEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sZUFBZTtBQUN0QixPQUFPLHFCQUFxQjtBQWI1QixJQUFNLG1DQUFtQztBQWV6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxNQUFNLEdBQUcsS0FBSyxRQUFRLGtDQUFXLEtBQUssQ0FBQztBQUFBLElBQ3pDO0FBQUEsRUFDRjtBQUFBLEVBRUEsU0FBUztBQUFBLElBQ1AsVUFBVTtBQUFBLE1BQ1IsU0FBUztBQUFBLFFBQ1AsS0FBSyxJQUFJO0FBQUEsVUFDUCxTQUFTLENBQUMsUUFBUTtBQUFBLFFBQ3BCLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRixDQUFDO0FBQUE7QUFBQSxJQUdELE1BQU07QUFBQSxNQUNKLFlBQVksQ0FBQyxLQUFLO0FBQUEsSUFDcEIsQ0FBQztBQUFBO0FBQUEsSUFHRCxRQUFRO0FBQUE7QUFBQSxJQUdSLFdBQVc7QUFBQSxNQUNULFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxRQUNKO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGFBQWE7QUFBQSxJQUNmLENBQUM7QUFBQSxJQUVELFdBQVc7QUFBQSxNQUNULFlBQVksQ0FBQyxLQUFLO0FBQUE7QUFBQSxNQUVsQixTQUFTLENBQUMsVUFBVSxZQUFZO0FBQUEsTUFDaEMsS0FBSztBQUFBLE1BQ0wsV0FBVztBQUFBLFFBQ1QsY0FBYztBQUFBLFVBQ1osUUFBUTtBQUFBLFFBQ1YsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUVELE1BQU07QUFBQSxJQUVOLE9BQU87QUFBQTtBQUFBLElBR1AsUUFBUTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsaUJBQWlCO0FBQUEsTUFDakIsYUFBYTtBQUFBLE1BQ2IsU0FBUyxDQUFDLEtBQUssUUFBUSxrQ0FBVyxZQUFZLENBQUM7QUFBQSxJQUNqRCxDQUFDO0FBQUE7QUFBQSxJQUdELGdCQUFnQixDQUFDLGlGQUFpRiwrREFBK0QsQ0FBQztBQUFBLEVBQ3BLO0FBQUE7QUFBQSxFQUdBLFlBQVk7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFlBQVk7QUFBQSxJQUNaLGlCQUFpQjtBQUFBLE1BQ2Ysb0JBQW9CO0FBQUEsSUFDdEI7QUFBQSxJQUNBLGFBQWE7QUFDWCxzQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
