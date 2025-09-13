import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertEnrollmentRequest } from "@shared/schema";
import { Send } from "lucide-react";

const EnrollmentForm = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState<InsertEnrollmentRequest>({
    studentFirstName: "",
    studentLastName: "",
    studentBirthDate: "",
    gradeLevel: "",
    parentName: "",
    parentPhone: "",
    parentEmail: "",
    interests: [],
    message: ""
  });

  const enrollmentMutation = useMutation({
    mutationFn: async (data: InsertEnrollmentRequest) => {
      const response = await apiRequest("POST", "/api/enrollment", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Demande envoyée avec succès",
        description: "Nous vous contacterons sous peu pour finaliser l'inscription.",
      });
      setFormData({
        studentFirstName: "",
        studentLastName: "",
        studentBirthDate: "",
        gradeLevel: "",
        parentName: "",
        parentPhone: "",
        parentEmail: "",
        interests: [],
        message: ""
      });
      queryClient.invalidateQueries({ queryKey: ['/api/enrollment'] });
    },
    onError: () => {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de votre demande.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    enrollmentMutation.mutate(formData);
  };

  const handleInterestChange = (interest: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        interests: [...(prev.interests || []), interest]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        interests: (prev.interests || []).filter(i => i !== interest)
      }));
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-bold text-foreground mb-6" data-testid="text-enrollment-form-title">
        Formulaire de Préinscription
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="studentLastName">Nom de l'enfant *</Label>
            <Input
              id="studentLastName"
              value={formData.studentLastName}
              onChange={(e) => setFormData(prev => ({ ...prev, studentLastName: e.target.value }))}
              placeholder="Nom complet"
              required
              data-testid="input-student-lastname"
            />
          </div>
          <div>
            <Label htmlFor="studentFirstName">Prénom de l'enfant *</Label>
            <Input
              id="studentFirstName"
              value={formData.studentFirstName}
              onChange={(e) => setFormData(prev => ({ ...prev, studentFirstName: e.target.value }))}
              placeholder="Prénom"
              required
              data-testid="input-student-firstname"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="studentBirthDate">Date de naissance *</Label>
            <Input
              id="studentBirthDate"
              type="date"
              value={formData.studentBirthDate}
              onChange={(e) => setFormData(prev => ({ ...prev, studentBirthDate: e.target.value }))}
              required
              data-testid="input-student-birthdate"
            />
          </div>
          <div>
            <Label htmlFor="gradeLevel">Niveau souhaité *</Label>
            <Select 
              value={formData.gradeLevel} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, gradeLevel: value }))}
              required
            >
              <SelectTrigger data-testid="select-grade-level">
                <SelectValue placeholder="Sélectionnez un niveau" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="petite-section">Petite Section (3-4 ans)</SelectItem>
                <SelectItem value="moyenne-section">Moyenne Section (4-5 ans)</SelectItem>
                <SelectItem value="grande-section">Grande Section (5-6 ans)</SelectItem>
                <SelectItem value="cp">CP (6-7 ans)</SelectItem>
                <SelectItem value="ce1">CE1 (7-8 ans)</SelectItem>
                <SelectItem value="ce2">CE2 (8-9 ans)</SelectItem>
                <SelectItem value="cm1">CM1 (9-10 ans)</SelectItem>
                <SelectItem value="cm2">CM2 (10-11 ans)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div>
          <Label htmlFor="parentName">Nom du parent/tuteur *</Label>
          <Input
            id="parentName"
            value={formData.parentName}
            onChange={(e) => setFormData(prev => ({ ...prev, parentName: e.target.value }))}
            placeholder="Nom complet du parent"
            required
            data-testid="input-parent-name"
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="parentPhone">Téléphone *</Label>
            <Input
              id="parentPhone"
              type="tel"
              value={formData.parentPhone}
              onChange={(e) => setFormData(prev => ({ ...prev, parentPhone: e.target.value }))}
              placeholder="+229 XX XX XX XX"
              required
              data-testid="input-parent-phone"
            />
          </div>
          <div>
            <Label htmlFor="parentEmail">Email</Label>
            <Input
              id="parentEmail"
              type="email"
              value={formData.parentEmail || ""}
              onChange={(e) => setFormData(prev => ({ ...prev, parentEmail: e.target.value }))}
              placeholder="email@exemple.com"
              data-testid="input-parent-email"
            />
          </div>
        </div>
        
        <div>
          <Label>Activités extrascolaires d'intérêt (optionnel)</Label>
          <div className="grid grid-cols-2 gap-3 mt-2">
            {["karate", "cuisine", "informatique", "danse"].map((interest) => (
              <div key={interest} className="flex items-center space-x-2">
                <Checkbox
                  id={interest}
                  checked={(formData.interests || []).includes(interest)}
                  onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                  data-testid={`checkbox-interest-${interest}`}
                />
                <Label htmlFor={interest} className="capitalize">
                  {interest === "danse" ? "Animation & Danse" : interest}
                </Label>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <Label htmlFor="message">Message (optionnel)</Label>
          <Textarea
            id="message"
            value={formData.message || ""}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            placeholder="Questions ou informations complémentaires..."
            className="h-24 resize-none"
            data-testid="textarea-message"
          />
        </div>
        
        <Button 
          type="submit" 
          size="lg" 
          className="w-full" 
          disabled={enrollmentMutation.isPending}
          data-testid="button-submit-enrollment"
        >
          <Send className="mr-2 h-4 w-4" />
          {enrollmentMutation.isPending ? "Envoi en cours..." : "Soumettre la demande de préinscription"}
        </Button>
        
        <p className="text-sm text-muted-foreground text-center" data-testid="text-enrollment-disclaimer">
          En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe pour finaliser l'inscription.
        </p>
      </form>
    </div>
  );
};

export default EnrollmentForm;
