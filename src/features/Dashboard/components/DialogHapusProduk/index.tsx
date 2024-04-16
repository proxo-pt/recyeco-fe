import React, { FC } from 'react';
import { Trash2, AlertCircle } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog';
import { useDeleteProduct } from '../../ManageProduct/hooks';

export const HapusProduk: FC<{ id: number }> = ({ id }) => {
  const { mutate } = useDeleteProduct();
  const onDelete = (id: number) => {
    mutate(id);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="text-red-500">
        <Trash2 />
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-max">
        <AlertDialogHeader className="items-center gap-4">
          <AlertDialogTitle>
            <AlertCircle size={64} className="text-red-500" />
          </AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col gap-4 items-center">
            <div className="text-black font-semibold">
              Apakah anda ingin menghapus data ini?
            </div>
            <div className="font-semibold">
              Data yang dihapus tidak dapat dipulihkan
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:justify-center">
          <AlertDialogCancel className="w-full bg-gray-400 hover:bg-gray-400 text-white hover:text-white">
            Batal
          </AlertDialogCancel>
          <AlertDialogAction
            className="w-full bg-red-500 hover:bg-red-500"
            onClick={() => onDelete(id)}
          >
            Hapus
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
