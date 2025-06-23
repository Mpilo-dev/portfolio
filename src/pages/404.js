import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry 😔, we couldn't find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  const { title, description, siteUrl } = data.site.siteMetadata;

  return (
    <>
      <title>Page Not Found - {title}</title>
      <meta
        name="description"
        content="Sorry, the page you're looking for doesn't exist. Please navigate back to the home page."
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}/404`} />
      <meta property="og:title" content={`Page Not Found - ${title}`} />
      <meta
        property="og:description"
        content="Sorry, the page you're looking for doesn't exist. Please navigate back to the home page."
      />
      <meta property="og:image" content={`${siteUrl}/images/team-mpilo.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${siteUrl}/404`} />
      <meta property="twitter:title" content={`Page Not Found - ${title}`} />
      <meta
        property="twitter:description"
        content="Sorry, the page you're looking for doesn't exist. Please navigate back to the home page."
      />
      <meta
        property="twitter:image"
        content={`${siteUrl}/images/team-mpilo.png`}
      />
    </>
  );
};
