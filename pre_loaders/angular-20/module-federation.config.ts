import {
  ModuleFederationConfig,
  SharedLibraryConfig,
} from "@nx/module-federation";
import { getOneCXSharedRecommendations } from "@onecx/accelerator";

import * as pkg from "package.json";

const additionalShared = Object.keys(pkg.dependencies)
  .map((d) => {
    return {
      libraryName: d,
      sharedConfig: getOneCXSharedRecommendations(d, {}),
    };
  })
  .filter(
    (
      config,
    ): config is { libraryName: string; sharedConfig: SharedLibraryConfig } =>
      !!config.sharedConfig,
  );

console.log("aS", additionalShared);

const config: ModuleFederationConfig = {
  name: "onecx-angular-20-loader",
  exposes: {
    ["./Angular20Loader"]: "src/main.ts",
  },
  shared: (libraryName, sharedConfig) => {
    const config = getOneCXSharedRecommendations(libraryName, sharedConfig);
    // Add custom shared configurations to the config object if needed
    return config;
  },
  additionalShared: additionalShared,
};

export default config;
