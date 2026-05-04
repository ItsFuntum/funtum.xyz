# Hello World

In this section, you will create your first Wii U homebrew application.

## Creating a Project

:::important

These commands are for Linux/macOS. As a result, Windows users should use the `MSys2` application.

:::

First, create a new project folder and navigate into it:

```bash
mkdir hello-world
cd hello-world
```

Next, create the project structure:

```bash
mkdir source
touch Makefile source/main.c
```

:::tip

`Makefile` has no file extension — this is intentional.

:::

Your project structure should look like this:

```text
hello-world/
├── Makefile
└── source/
    └── main.c
```

## Writing Code

Open `source/main.c` and add the following code:

```C
#include <coreinit/thread.h>

#include <whb/log.h>
#include <whb/log_console.h>
#include <whb/proc.h>

int
main(int argc, char **argv)
{
   WHBProcInit();
   WHBLogConsoleInit();
   WHBLogPrintf("Hello World!");

   while (WHBProcIsRunning()) {
      // Main loop
   }

   WHBLogPrintf("Exiting...");
   WHBLogConsoleDraw();
   OSSleepTicks(OSMillisecondsToTicks(1000));

   WHBLogConsoleFree();
   WHBProcShutdown();
   return 0;
}
```

:::tip

This is a minimal Wii U homebrew template that initializes the system, prints "Hello World!", and keeps the application running until it is closed.

The `while (WHBProcIsRunning())` loop keeps the application alive. Without it, the program would exit immediately.

:::

## Writing a Makefile

Copy the official Wii U homebrew Makefile template from the devkitPro `wut` samples:

https://raw.githubusercontent.com/devkitPro/wut/refs/heads/master/samples/make/helloworld/Makefile

Paste it inside the `Makefile` that you previously created.

:::tip

This is the standard build system for Wii U homebrew using `devkitPro` and `wut`.

You generally do not need to modify it unless you are adding libraries.

:::

## Building

To build the project, navigate to the directory that contains the Makefile and run:

```bash
make
```

If everything is set up correctly with devkitPro, this will generate a .rpx or .elf file.

## Running on Wii U

To run your application:

- Copy the .rpx file to your SD card
- Place it in the apps folder inside the wiiu directory on your SD card
- Launch it from the Wii U Menu

Running it via [Cemu](https://cemu.info/) is even easier:

- Launch Cemu
- File > Load
- Open the .rpx file

Console emulation isn't perfect so there may be differences between how the code runs on the emulator and real hardware, which is why I recommend only using it to quickly test and debug code.
