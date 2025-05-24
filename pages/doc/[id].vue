<template>
  <div class="max-w-3xl mx-auto pb-24 py-8">
    <Editor :editorState="docContent" />
  </div>
</template>

<script setup lang="ts">
import { getFile } from "~/lib/api";

const { id } = useRoute().params;
const file = getFile(Number(id));

const docContent = ` Document Page: ${id} DocumentEditor Import trace for requested module:
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      ./src/app/(root)/doc/DocumentEditor/EditorToolbar.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx
      ./src/editor/extensions/extension-kit.ts Attempted import error:
      ./src/editor/extensions/extension-kit.ts ./src/editor/hooks/useEditor.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx ○ Compiling /_not-found ...
      ⚠ ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      Attempted import error: is not exported from requested module:
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      ./src/app/(root)/doc/DocumentEditor/EditorToolbar.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      Attempted import error: is not exported from module:
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      ./src/app/(root)/doc/DocumentEditor/EditorToolbar.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx
      ./src/editor/extensions/extension-kit.ts Attempted import error:
      ./src/editor/extensions/extension-kit.ts ./src/editor/hooks/useEditor.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      Attempted import error: is not exported from requested module:
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      ./src/app/(root)/doc/DocumentEditor/EditorToolbar.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts module:
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      ./src/app/(root)/doc/DocumentEditor/EditorToolbar.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx
      ./src/editor/extensions/extension-kit.ts Attempted import error: is not
      exported from(imported as . Import trace for requested module:
      ./src/editor/extensions/extension-kit.ts ./src/editor/hooks/useEditor.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx GET
      /_next/static/chunks/app/(root)/doc/index.js.map 404 in 1467ms ⚠
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      requested module:
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      ./src/app/(root)/doc/DocumentEditor/EditorToolbar.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      Attempted import error: is not exported from module:
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      ./src/app/(root)/doc/DocumentEditor/EditorToolbar.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx
      ./src/editor/extensions/extension-kit.ts Attempted import error: module:
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      ./src/app/(root)/doc/DocumentEditor/EditorToolbar.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx
      ./src/editor/extensions/extension-kit.ts Attempted import error: is not
      exported from requested module: ./src/editor/extensions/extension-kit.ts
      ./src/editor/hooks/useEditor.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      Attempted import error: is not exported from module:
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      ./src/app/(root)/doc/DocumentEditor/EditorToolbar.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx
      ./src/editor/extensions/extension-kit.ts Attempted import error:
      ./src/editor/extensions/extension-kit.ts ./src/editor/hooks/useEditor.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      Attempted import error: is not exported from module:
      ./src/editor/extensions/extension-kit.ts
      ./src/app/(root)/doc/DocumentEditor/EditorToolbar.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx
      ./src/editor/extensions/extension-kit.ts Attempted import error: is not
      exported from requested module: ./src/editor/extensions/extension-kit.ts
      ./src/editor/hooks/useEditor.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      Attempted import error: is not exported from module:
      ./src/editor/extensions/extension-kit.ts
      ./src/app/(root)/doc/DocumentEditor/EditorToolbar.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx
      ./src/editor/extensions/extension-kit.ts Attempted import error: is not
      exported from requested module: ./src/editor/extensions/extension-kit.ts
      ./src/editor/hooks/useEditor.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      DocumentEditor Import trace for requested module:
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      ./src/app/(root)/doc/DocumentEditor/EditorToolbar.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx
      ./src/editor/extensions/extension-kit.ts Attempted import error:
      ./src/editor/extensions/extension-kit.ts ./src/editor/hooks/useEditor.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx ○ Compiling /_not-found ...
      ⚠ ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      Attempted import error: is not exported from requested module:
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      ./src/app/(root)/doc/DocumentEditor/EditorToolbar.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      Attempted import error: is not exported from module:
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      ./src/app/(root)/doc/DocumentEditor/EditorToolbar.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx
      ./src/editor/extensions/extension-kit.ts Attempted import error:
      ./src/editor/extensions/extension-kit.ts ./src/editor/hooks/useEditor.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      Attempted import error: is not exported from requested module:
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      ./src/app/(root)/doc/DocumentEditor/EditorToolbar.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts module:
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      ./src/app/(root)/doc/DocumentEditor/EditorToolbar.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx
      ./src/editor/extensions/extension-kit.ts Attempted import error: is not
      exported from(imported as . Import trace for requested module:
      ./src/editor/extensions/extension-kit.ts ./src/editor/hooks/useEditor.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx GET
      /_next/static/chunks/app/(root)/doc/index.js.map 404 in 1467ms ⚠
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      requested module:
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      ./src/app/(root)/doc/DocumentEditor/EditorToolbar.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      Attempted import error: is not exported from module:
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      ./src/app/(root)/doc/DocumentEditor/EditorToolbar.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx
      ./src/editor/extensions/extension-kit.ts Attempted import error: module:
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      ./src/app/(root)/doc/DocumentEditor/EditorToolbar.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx
      ./src/editor/extensions/extension-kit.ts Attempted import error: is not
      exported from requested module: ./src/editor/extensions/extension-kit.ts
      ./src/editor/hooks/useEditor.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      Attempted import error: is not exported from module:
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      ./src/app/(root)/doc/DocumentEditor/EditorToolbar.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx
      ./src/editor/extensions/extension-kit.ts Attempted import error:
      ./src/editor/extensions/extension-kit.ts ./src/editor/hooks/useEditor.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      Attempted import error: is not exported from module:
      ./src/editor/extensions/extension-kit.ts
      ./src/app/(root)/doc/DocumentEditor/EditorToolbar.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx
      ./src/editor/extensions/extension-kit.ts Attempted import error: is not
      exported from requested module: ./src/editor/extensions/extension-kit.ts
      ./src/editor/hooks/useEditor.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts
      Attempted import error: is not exported from module:
      ./src/editor/extensions/extension-kit.ts
      ./src/app/(root)/doc/DocumentEditor/EditorToolbar.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx
      ./src/editor/extensions/extension-kit.ts Attempted import error: is not
      exported from requested module: ./src/editor/extensions/extension-kit.ts
      ./src/editor/hooks/useEditor.tsx
      ./src/app/(root)/doc/DocumentEditor/index.tsx
      ./src/editor/_components/menus/TextMenu/hooks/useTextmenuStates.ts`;
const getChidrenFiles = () => {
  return file?.children;
};
const files = getChidrenFiles();
definePageMeta({
  layout: "editor",
});
</script>
