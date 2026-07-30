import Layout from "@theme/Layout";
import React from "react";

export default function Home(): JSX.Element {
  return (
    <Layout title="Funtum.xyz" description="Projects and guides">
      <main
        style={{ padding: "4rem 2rem", maxWidth: "900px", margin: "0 auto" }}
      >
        <h1>Welcome to my website.</h1>

        <p>On this page you'll find information about my projects.</p>

        <p>
          If you are looking for the Wii U Homebrew App Development Guide, you can find it <a href="/docs/intro">here</a>.
        </p>

        <section style={{ marginTop: "3rem" }}>
          <h2>StreamMii</h2>
          <p>
            StreamMii is a Wii U plugin that captures and streams the TV or DRC (GamePad) display to a receiver over the network.
          </p>
          <p>
            <a href="https://github.com/ItsFuntum/StreamMii">GitHub</a>
          </p>
        </section>

        <section style={{ marginTop: "3rem" }}>
          <h2>aurorachat for Wii U</h2>
          <p>
            aurorachat is a chatting application for a wide range of devices,
            including 3DS, Wii, Wii U and web. I'm not the creator of aurorachat,
            but I maintain the Wii U version and have made some contributions to the project.
          </p>
          <p>
            <a href="https://github.com/Unitendo/aurorachat-wiiu">GitHub</a>
          </p>
        </section>

        <section style={{ marginTop: "3rem" }}>
          <h2>Juxtaposition Enhancer</h2>
          <p>
            A userscript that improves Pretendo's Juxtaposition web experience.
          </p>
          <p>
            <a href="https://github.com/ItsFuntum/Juxtaposition-Enhancer">GitHub</a> |{" "}
            <a href="https://greasyfork.org/en/scripts/559732-juxtaposition-pretendo-enhancer">Greasy Fork</a>
          </p>
        </section>

        <footer style={{ marginTop: "5rem", opacity: 0.7 }}>
          © 2026 Funtum.xyz
        </footer>
      </main>
    </Layout>
  );
}
