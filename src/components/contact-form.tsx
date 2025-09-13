import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertContactMessage } from "@shared/schema";
import { Send } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState<InsertContactMessage>({
    name: "",
    phone: "",
    subject: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message envoyé avec succès",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setFormData({
        name: "",
        phone: "",
        subject: "",
        message: ""
      });
      queryClient.invalidateQueries({ queryKey: ['/api/contact'] });
    },
    onError: () => {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de votre message.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  return (
    <div className="bg-card rounded-xl p-6">
      <h3 className="text-lg font-bold text-foreground mb-4" data-testid="text-contact-form-title">
        Formulaire de Contact Rapide
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Nom complet *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            placeholder="Votre nom"
            required
            data-testid="input-contact-name"
          />
        </div>
        
        <div>
          <Label htmlFor="phone">Téléphone *</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            placeholder="+229 XX XX XX XX"
            required
            data-testid="input-contact-phone"
          />
        </div>
        
        <div>
          <Label htmlFor="subject">Sujet</Label>
          <Select 
            value={formData.subject || ""} 
            onValueChange={(value) => setFormData(prev => ({ ...prev, subject: value }))}
          >
            <SelectTrigger data-testid="select-contact-subject">
              <SelectValue placeholder="Sélectionnez un sujet" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="inscription">Demande d'inscription</SelectItem>
              <SelectItem value="visite">Visite de l'école</SelectItem>
              <SelectItem value="programmes">Information sur les programmes</SelectItem>
              <SelectItem value="tarifs">Information sur les tarifs</SelectItem>
              <SelectItem value="autre">Autre</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            placeholder="Votre message..."
            className="h-24 resize-none"
            required
            data-testid="textarea-contact-message"
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full" 
          disabled={contactMutation.isPending}
          data-testid="button-submit-contact"
        >
          <Send className="mr-2 h-4 w-4" />
          {contactMutation.isPending ? "Envoi en cours..." : "Envoyer le message"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
