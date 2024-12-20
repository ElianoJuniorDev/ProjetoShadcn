import { CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export function Sales() {
    return (
        <Card>
        <CardHeader>
          <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-xl text-gray-600">
              Últimos Clientes
            </CardTitle>
            <CircleDollarSign className="ml-auto w-4 h-4"/>
          </div>
          <CardDescription>
            Novos Clientes nas Últimas 24 Horas
          </CardDescription>
          </CardHeader>

          <CardContent>
            <article className="flex items-center gap-2 bordeer-b py-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="https://github.com/ElianoJuniorDev.png" />
                  <AvatarFallback>DV</AvatarFallback>  
                </Avatar>
                <div>
                    <p className= "text-sm sm-text-base font-semibold">ElianoJuniorDev</p>
                    <span className="text-[12px] sm:text-sm text-gray-400">teste@teste.com</span>
                </div>
            </article>

            <article className="flex items-center gap-2 bordeer-b py-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="https://github.com/exxusdev.png" />
                  <AvatarFallback>DV</AvatarFallback>  
                </Avatar>
                <div>
                    <p className= "text-sm sm-text-base font-semibold">Jonasexxusdev</p>
                    <span className="text-[12px] sm:text-sm text-gray-400">teste@teste.com</span>
                </div>
            </article>

            <article className="flex items-center gap-2 bordeer-b py-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="https://github.com/fabiosabatinebock.png" />
                  <AvatarFallback>DV</AvatarFallback>  
                </Avatar>
                <div>
                    <p className= "text-sm sm-text-base font-semibold">fabiosabatinebock</p>
                    <span className="text-[12px] sm:text-sm text-gray-400">teste@teste.com</span>
                </div>
            </article>

            <article className="flex items-center gap-2 bordeer-b py-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src=".png" />
                  <AvatarFallback>DV</AvatarFallback>  
                </Avatar>
                <div>
                    <p className= "text-sm sm-text-base font-semibold">Bahiano</p>
                    <span className="text-[12px] sm:text-sm text-gray-400">teste@teste.com</span>
                </div>
            </article>
          </CardContent>
        </Card>     
    )
}