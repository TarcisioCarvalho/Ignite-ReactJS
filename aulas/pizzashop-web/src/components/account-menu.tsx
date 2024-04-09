import { Building, ChevronDown, LogOut } from 'lucide-react'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { useQuery } from '@tanstack/react-query'
import { getProfile } from '@/api/get-profile'
import { getProfileManagedRestaurant } from '@/api/get-managed-restaurant'

export const AccountMenu= () => {

  const {data : profile} = useQuery({
    queryKey:["profile"],
    queryFn:getProfile,
  });

  const {data : managedRestaurant} = useQuery({
    queryKey : ["managed-restaurant"],
    queryFn : getProfileManagedRestaurant,
  });

  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant={"outline"} className='flex items-center gap-2 select-none'>
                {managedRestaurant?.name}
                <ChevronDown className='w-4 h-4'/>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='w-56'>
            <DropdownMenuLabel className='flex flex-col'>
              <span>{profile?.name}</span>
              <span className='text-xs font-normal text-muted-foreground'>
                {profile?.email}
              </span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuItem>
                <Building className='w-4 h-4 mr-2'/>
                <span>Perfil da loja</span>
            </DropdownMenuItem>
            <DropdownMenuItem className='text-rose-500 dark:text-rose-400'>
                <LogOut className='w-4 h-4 mr-2'/>
                <span>Sair</span>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}
