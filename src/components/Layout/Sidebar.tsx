import Link from "next/link"
import { Stack, Button } from "@mantine/core"

export default function Sidebar() {
  return (
    <Stack p="md">
      <Link href="/">
        <Button variant="subtle">Store</Button>
      </Link>

      <Link href="/cart">
        <Button variant="subtle">Cart</Button>
      </Link>

      <Link href="/orders">
        <Button variant="subtle">Orders</Button>
      </Link>
    </Stack>
  )
}