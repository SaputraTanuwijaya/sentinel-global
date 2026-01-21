import { Html } from "@elysiajs/html";

export const Layout = ({ children }: { children: any }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sentinel Global | Secure Transport</title>
        <script src="/public/js/htmx.min.js"></script>
        <link href="/public/styles.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
        <style>
          {`
            body { margin: 0; overflow: hidden; background-color: #0a0a0a; color: white; }
            #canvas-container { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 0; }
            #ui-layer { position: relative; z-index: 10; pointer-events: none; height: 100vh; width: 100vw; }  
            #ui-layer > * { pointer-events: auto; }
          `}
        </style>
      </head>
      <body class="bg-sentinel-bg text-white font-sans antialiased">
        <div id="canvas-container"></div>
        <main id="ui-layer" hx-boost="true">
          {children}
        </main>

        <script src="/public/js/index.js"></script>
      </body>
    </html>
  );
};
