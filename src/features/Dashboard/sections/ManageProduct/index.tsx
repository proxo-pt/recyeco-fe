import { Button } from '@/components/ui/button';
import { InputSearch } from '@/components/ui/input-search';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import {
  ManageProductMain,
  ManageProductTitle,
  TabManage
} from '@/constants/dashboard';
import { Search } from 'lucide-react';
import { FC } from 'react';
import { TambahProduk } from '../../components/DialogTambahProduk';
import { EditProduk } from '../../components/DialogEditProduk';
import { HapusProduk } from '../../components/DialogHapusProduk';
import { LihatProduk } from '../../components/DialogLihatProduk';

const ManageProduct: FC = () => {
  return (
    <div className="bg-white p-5 rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex gap-8 bg-gray-100 rounded-xl">
          {TabManage.map(item => (
            <div key={item.id} className="hover:bg-green-200 rounded-xl p-4">
              <div className="flex gap-2 text-black font-semibold items-center">
                {item.title}
                <div className="p-2 bg-gray-300 rounded-3xl ">{item.total}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <div className="hidden lg:block ">
            <InputSearch
              type="search"
              placeholder="Cari disini..."
              className="text-neutral-600 placeholder-neutral-600"
              suffix={<Search className="text-neutral-600" />}
            />
          </div>
          <div>
            <TambahProduk />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Table>
          <TableHeader>
            <TableRow>
              {ManageProductTitle.map(item => (
                <TableHead key={item.id} className="text-center">
                  {item.title}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {ManageProductMain.map(item => (
              <TableRow key={item.id}>
                <TableCell className="text-center">{item.number}</TableCell>
                <TableCell className="text-center">
                  {item.description}
                </TableCell>
                <TableCell className="text-center">{item.type}</TableCell>
                <TableCell className="text-center">{item.weight}</TableCell>
                <TableCell className="text-center">{item.price}</TableCell>
                <TableCell className="text-center">
                  {item.status === 'Menunggu' && (
                    <button className="bg-yellow-100 p-2 rounded-md">
                      {item.status}
                    </button>
                  )}
                  {item.status === 'Terjual' && (
                    <button className="bg-red-600 p-2 rounded-md text-white">
                      {item.status}
                    </button>
                  )}
                  {item.status === 'Tersedia' && (
                    <button className="bg-green-600 p-2 rounded-md text-white">
                      {item.status}
                    </button>
                  )}
                </TableCell>

                <TableCell>
                  {item.status === 'Terjual' && (
                    <div className="flex justify-center items-center gap-4">
                      <LihatProduk />
                      <EditProduk />
                      <HapusProduk />
                    </div>
                  )}
                  {item.status === 'Tersedia' && (
                    <div className="flex justify-center items-center gap-4">
                      <LihatProduk />
                      <EditProduk />
                      <HapusProduk />
                    </div>
                  )}
                  {item.status === 'Menunggu' && (
                    <div className="flex justify-center items-center gap-4">
                      <Button className="bg-green-600">Setujui</Button>
                      <Button className="bg-red-600">Batalkan</Button>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ManageProduct;
