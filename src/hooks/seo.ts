import { useEffect } from 'react';

export interface SeoArgs {
  title?: string | undefined;
  keywords?: string | undefined;
  description?: string | undefined;
}

export function useSeo({ title, keywords, description }: SeoArgs): void {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (keywords) {
      let k = document.querySelector('meta[name="keywords"]');

      if (!k) {
        k = document.createElement('meta');
        k.setAttribute('name', 'keywords');
        document.head.appendChild(k);
      }

      k.setAttribute('content', keywords);
    }

    if (description) {
      let d = document.querySelector('meta[name="description"]');

      if (!d) {
        d = document.createElement('meta');
        d.setAttribute('name', 'description');
        document.head.appendChild(d);
      }

      d.setAttribute('content', description);
    }
  }, [title, keywords, description]);
}
