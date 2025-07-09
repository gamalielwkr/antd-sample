import { Suspense } from "react";

import PageLoadingSpinner from "./PageLoadingSpinner";

export default function PageLazyLoad(Component: React.LazyExoticComponent<React.FC>) {
  return (
    <Suspense fallback={<PageLoadingSpinner />}>
      <Component />
    </Suspense>
  )
}
