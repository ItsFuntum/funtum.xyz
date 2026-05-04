# Setup

Before developing Wii U homebrew applications, you need to install the required tools.

## Required tools

- **VS Code** (or any editor)  
  https://code.visualstudio.com/Download

- **devkitPro toolchain**  
  https://devkitpro.org/wiki/Getting_Started

- **Wii U toolchain (wut)**  
  Included automatically when installing the `wiiu-dev` package group via devkitPro.

## Installing devkitPro (Windows)

:::important

This section is for Windows users. If you are using macOS, Linux, or another Unix-like operating system, refer to the devkitPro wiki.

:::

First, follow the installation instructions here:

https://devkitpro.org/wiki/Getting_Started#Windows

When selecting components, you only need **Minimal System**.

After installation is complete, open the installed `MSys2` application and run:

```bash
pacman -Syu wiiu-dev
```

If prompted with:

`Enter a selection (default=all):`

Press Enter or type the default value.

Proceed to the next page if the installation was successful.
