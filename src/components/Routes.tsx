import React, { memo, useState, useEffect, lazy, Suspense } from "react"
import { withRouter, Switch, Route } from "react-router"

import Icon from "./Icon"

function ucfirst(x: string): string {
   return x.charAt(0).toUpperCase() + x.slice(1)
}

const Loading: React.FC = memo(() => (
   <div className="w-full fixed left-0" style={{ top: 100 }}>
      <div className="flex justify-center">
         <Icon name="spinner-third" size="2x" spin className="text-multicolor" />
         &nbsp; loading...
      </div>
   </div>
))

const LazyLoader = memo(
   (props: any) => {
      const [Page, setPage] = useState<any>(null)
      const {
         match: { params },
         screenRef,
      } = props

      useEffect(() => {
         switch (true) {
            case !params.page:
               const pageIntro = lazy(() => import("../pages/Spa"))
               setPage(pageIntro)
               break
            default:
               const pageNav = lazy(() => import(`../pages/${params.page}/${ucfirst(params.page)}`))
               setPage(pageNav)
         }
      }, [setPage, params])

      return (
         <div ref={screenRef} className="screen" style={{ height: "calc(100vh - 60px)" }}>
            <Suspense fallback={<Loading />}>{Page && <Page {...props} />}</Suspense>
         </div>
      )
   },
   (p, n) => p.location.pathname === n.location.pathname
)

const Routes: React.FC<any> = router => {
   const {
      location,
      location: { pathname },
   } = router

   return (
      <Switch location={location}>
         <Route
            exact
            path="/:page?/:action?/:id?/:option?"
            render={props => <LazyLoader key={pathname} {...{ ...props, ...router }} />}
         />
      </Switch>
   )
}
export default memo(withRouter(Routes))
