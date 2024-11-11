"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/layout/card";
import { Label } from "@/components/ui/form/label";
import { Switch } from "@/components/ui/form/switch";
import { toast } from "sonner";

export default function SettingsPage() {
  const handleToggle = () => {
    toast.success("Setting updated!");
  };

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>
            Configure how you receive notifications.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="flex items-center justify-between space-x-4">
            <Label htmlFor="notifications" className="flex flex-col space-y-1">
              <span>Push Notifications</span>
              <span className="text-sm text-muted-foreground">
                Receive notifications when someone mentions you.
              </span>
            </Label>
            <Switch id="notifications" onCheckedChange={handleToggle} />
          </div>
          <div className="flex items-center justify-between space-x-4">
            <Label htmlFor="emails" className="flex flex-col space-y-1">
              <span>Marketing Emails</span>
              <span className="text-sm text-muted-foreground">
                Receive emails about new products, features, and more.
              </span>
            </Label>
            <Switch id="emails" onCheckedChange={handleToggle} />
          </div>
          <div className="flex items-center justify-between space-x-4">
            <Label htmlFor="updates" className="flex flex-col space-y-1">
              <span>Security Updates</span>
              <span className="text-sm text-muted-foreground">
                Get notified about security updates and new features.
              </span>
            </Label>
            <Switch id="updates" onCheckedChange={handleToggle} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
