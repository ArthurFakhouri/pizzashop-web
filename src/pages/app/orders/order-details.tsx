import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: 12312redgfa12</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>
      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-stone-400"></span>
                  <span className="font-medium text-muted-foreground">
                    Pendente
                  </span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">
                Arthur Fakhouri
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">
                (00) 00000-0000
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">E-Mail</TableCell>
              <TableCell className="flex justify-end">
                arthurfakhouri@outlook.com
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Qtd.</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Pizza Calabresa</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$ 58,90</TableCell>
              <TableCell className="text-right">R$ 117,80</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pizza Piemontese</TableCell>
              <TableCell className="text-right">1</TableCell>
              <TableCell className="text-right">R$ 61,00</TableCell>
              <TableCell className="text-right">R$ 61,00</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total do pedido</TableCell>
              <TableCell className="text-right font-medium">
                R$ 178,80
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}
