/**
 * The content footer - _includes/components/footer.html with this site's
 * config applied: back-to-top on, no custom footer, no edit links, and the
 * theme's default attribution line in the mobile-only block.
 */
export default function PageFooter() {
  return (
    <>
      <hr />
      <footer>
        <p>
          <a href="#top" id="back-to-top">
            Back to top
          </a>
        </p>

        <div className="d-md-none mt-4 fs-2">
          This site uses <a href="https://github.com/just-the-docs/just-the-docs">Just the Docs</a>, a
          documentation theme for Jekyll.
        </div>
      </footer>
    </>
  );
}
