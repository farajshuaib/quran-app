package com.quran;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;
import android.os.Bundle;

// for rtl support
import com.facebook.react.modules.i18nmanager.I18nUtil;


public class MainActivity extends ReactActivity {

  @Override
protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this, R.style.SplashStatusBarTheme);
    super.onCreate(savedInstanceState);


    // for rtl support
     I18nUtil sharedI18nUtilInstance = I18nUtil.getInstance();
      sharedI18nUtilInstance.forceRTL(this,true);
      sharedI18nUtilInstance.allowRTL(this, true);


}

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "quran";
  }
}
