import {
  Dialog,
  DialogContent,
  InterceptedDialogContent,
} from "@/components/ui/dialog";
import Link from "next/link";
import UserAuthForm from "@/components/user-auth-form";
import { Icons } from "@/components/icons";

export default function HobbyPageModal({ params }: { params: { id: string } }) {
  return (
    <Dialog open>
      <InterceptedDialogContent>
        <h1>{params.id} Page Modal</h1>
      </InterceptedDialogContent>
    </Dialog>
  );
}
