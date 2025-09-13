import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface GalleryLightboxProps {
  image: string | null;
  onClose: () => void;
}

const GalleryLightbox = ({ image, onClose }: GalleryLightboxProps) => {
  return (
    <Dialog open={!!image} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-4xl p-0 border-0">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
            data-testid="button-close-lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          {image && (
            <img
              src={image}
              alt="Image agrandie"
              className="w-full h-auto max-h-[80vh] object-contain"
              data-testid="img-lightbox"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryLightbox;
