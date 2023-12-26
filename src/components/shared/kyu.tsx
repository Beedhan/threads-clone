import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { api } from "@/utils/api";

const UserDetails = () => {
  const {data,isLoading} = api.auth.details.useQuery();
  return (
    <>
    {!isLoading&&!data?.completed&&(
        <Dialog open={true}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Knowing you better!</DialogTitle>
          </DialogHeader>
          <div>
            
          </div>
        </DialogContent>
      </Dialog>
    )}
    </>
  );
};

export default UserDetails;
