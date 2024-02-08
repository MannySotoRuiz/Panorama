import { UserButton } from "@/components/auth/user-button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const SettingsPage = () => {
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <h1 className="text-2xl font-semibold text-center">Settings</h1>
      </CardHeader>
      <CardContent className="flex items-center justify-center py-10">
        <UserButton />
      </CardContent>
    </Card>
  );
};

export default SettingsPage;
