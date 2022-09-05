# Bug reproduction

https://github.com/NikolaRHristov/astro-compress/issues/27

To reproduce, install deps with `pnpm install` and then build with `pnpm run build`.

Check `dist/index.html` and observe no minification was performed.

Logs should look like this:

```
> @example/minimal@0.0.1 build /home/username/astro-compress-repro
> astro build

10:13:15 AM [build] output target: static
10:13:15 AM [build] Collecting build info...
10:13:15 AM [build] Completed in 5ms.
10:13:15 AM [build] Building static entrypoints...
10:13:15 AM [build] Completed in 250ms.

 generating static routes
▶ src/pages/index.astro
  └─ /index.html (+4ms)
Completed in 8ms.

10:13:15 AM [build] 1 page(s) built in 274ms
10:13:15 AM [build] Complete!
```

Note that there is no output from `astro-compress`, normally it would say:

```
Compressed index.html for 43 Bytes (14.24% reduction).
Successfully compressed a total of 1 HTML file for 43 Bytes.
```
