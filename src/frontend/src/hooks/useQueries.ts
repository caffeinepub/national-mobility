import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { DrivingExperience, Location } from "../backend";
import { useActor } from "./useActor";

export function useSubmitApplication() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      fullName: string;
      phoneNumber: string;
      location: Location;
      drivingLicenseNumber: string;
      experience: DrivingExperience;
    }) => {
      if (!actor) throw new Error("Actor not available");
      await actor.submitApplication(
        data.fullName,
        data.phoneNumber,
        data.location,
        data.drivingLicenseNumber,
        data.experience,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["applications"] });
    },
  });
}
