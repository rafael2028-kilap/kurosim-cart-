import {
  Card,
  Text,
  Button,
  Stack,
  Group
} from "@mantine/core"

import { CartItem as CartItemType } from "@/features/cart/cartStore"
import { useCartStore } from "@/features/cart/cartStore"

interface Props {
  item: CartItemType
}

export default function CartItem({ item }: Props) {

  const removeFromCart = useCartStore((s) => s.removeFromCart)

  const total = item.plan.price * item.quantity

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>

      <Stack>

        <Text fw={600}>
          {item.plan.title}
        </Text>

        <Text size="sm">
          Activation: {new Date(item.activationDate).toLocaleDateString()}
        </Text>

        <Text size="sm">
          Quantity: {item.quantity}
        </Text>

        <Text fw={500}>
          Price: IDR {total.toLocaleString()}
        </Text>

        <Group justify="flex-end">

          <Button
            size="xs"
            color="red"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </Button>

        </Group>

      </Stack>

    </Card>
  )
}