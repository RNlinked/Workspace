<template>
  <TiptapEditorContent :editor="editor" class="h-3/4" />
</template>

<script setup lang="ts">
const { editorState } = defineProps<{
  editorState: String | undefined;
}>();

const editor = useEditor({
  content: editorState,
  extensions: [TiptapStarterKit],
});

onBeforeUnmount(() => {
  if (editor) {
    const editorInstance = unref(editor);
    if (editorInstance) {
      editorInstance.destroy();
    }
  }
});
</script>
