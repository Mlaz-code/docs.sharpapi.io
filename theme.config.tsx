import React from 'react';
import Link from 'next/link';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: (
    <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      <span style={{ fontWeight: 700 }}>SharpAPI</span>
    </Link>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s - SharpAPI Docs',
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="SharpAPI Documentation" />
      <meta property="og:description" content="Real-time sports betting odds API" />
    </>
  ),
  primaryHue: 210,
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} SharpAPI. All rights reserved.
      </span>
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: false,
  },
  feedback: {
    content: null,
  },
  editLink: {
    component: null,
  },
};

export default config;
