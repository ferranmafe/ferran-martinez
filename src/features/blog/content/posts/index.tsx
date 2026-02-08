import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/posts/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/blog/posts/"!</div>
}
