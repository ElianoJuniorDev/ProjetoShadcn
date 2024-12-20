import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { BadgeDollarSign, DollarSign, Percent, Users } from "lucide-react";

import ChartOverview from "../components/chart";
import { Sales } from "../components/sales";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="sm:ml-14 p-4">
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-center">
                  <CardTitle className="text-lg sm:text-xl text-gray-600">
                    Total Vendas
                  </CardTitle>
                  <DollarSign className="ml-auto w-4 h-4"/>
                </div>

                <CardDescription>
                  Total de Vendas em 90 Dias
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-base sm:text-lg font-bold">R$ 151.568</p>
              </CardContent>
            </Card> 

            <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-600">
                  Clientes
                </CardTitle>
                <Users className="ml-auto w-4 h-4"/>
              </div>

              <CardDescription>
                Novos Clientes
              </CardDescription>
            </CardHeader>

            <CardContent>
              <p className="text-base sm:text-lg font-bold">583</p>
            </CardContent>
          </Card> 

          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-600">
                  Pedidos
                </CardTitle>
                <Percent className="ml-auto w-4 h-4"/>
              </div>

              <CardDescription>
                Total de Pedidos
              </CardDescription>
            </CardHeader>

            <CardContent>
              <p className="text-base sm:text-lg font-bold">86</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-600">
                  Total Pedidos
                </CardTitle>
                <BadgeDollarSign className="ml-auto w-4 h-4"/>
              </div>

              <CardDescription>
                  Total Pedidos Mês
              </CardDescription>
            </CardHeader>

            <CardContent>
              <p className="text-base sm:text-lg font-bold">583</p>
            </CardContent>
          </Card>  

        </section>

        <section className="mt-4 flex flex-col md:flex-row gap-4">
          <ChartOverview/>

          <Sales/>
        </section>
      </main>
    </div>  
  );
}
