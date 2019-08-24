package com.rnadvanced;

import android.app.Application;
import android.content.Context;
import android.content.pm.PackageManager;
import android.os.Environment;
import android.util.Log;

import androidx.core.content.ContextCompat;

import com.facebook.react.PackageList;
import com.facebook.hermes.reactexecutor.HermesExecutorFactory;
import com.facebook.react.bridge.JavaScriptExecutorFactory;
import com.facebook.react.ReactApplication;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;

import java.io.File;
import java.security.Permission;
import java.util.List;

import javax.annotation.Nullable;

import static android.Manifest.permission.READ_EXTERNAL_STORAGE;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      @SuppressWarnings("UnnecessaryLocalVariable")
      List<ReactPackage> packages = new PackageList(this).getPackages();
      // Packages that cannot be autolinked yet can be added manually here, for example:
      // packages.add(new MyReactNativePackage());
      return packages;
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }

    @Nullable
    @Override
    protected String getJSBundleFile() {
      if (lacksPermission(MainApplication.this, READ_EXTERNAL_STORAGE)) {
        return null;
      }
      String path = Environment.getExternalStorageDirectory().getAbsolutePath() + File.separator + "bundles/index.android.bundle";
      File file = new File(path);
      if (file.exists()) {
        return path;
      }
      return null;
    }
  };
  /**
   * 判断是否缺少权限
   */
  private static boolean lacksPermission(Context mContexts, String permission) {
    return ContextCompat.checkSelfPermission(mContexts, permission) ==
            PackageManager.PERMISSION_DENIED;
  }
  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }
  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
