# MapTiler CDN

- File structure:
  - `/{project_name}/v{major}.{minor}/{filename}.{ext}`
- Backwards compatible *patch* releases are to be done inplace
- Additional `/{project_name}/v{major}/` pointing to the latest *minor* release
  - manually updated symlink
