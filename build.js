var bt = require("./buildtools/buildTools.js");

if (bt.options.official) {
  // Check everything committed
  bt.git_check();

  // Clock version
  bt.clock_version();

  // Clean build directory
  //bt.run("rm -rf ./Build");
}


  // Clock version
  bt.clock_version();

// Build
bt.run("dotnet build Topten.RichTextKit -c Release");

if (bt.options.official) {
  // Tag and commit
  bt.git_tag();

  // Push nuget package
  bt.run(
    `dotnet nuget push`,
    `./Build/Release/*.${bt.options.version.build}.nupkg`,
    `--source nuget.org`
  );
}
