package io.ionic.cs.appsummit;

import androidx.appcompat.app.AppCompatActivity;
import android.content.Intent;
import android.os.Bundle;
import android.os.Bundle;

public class LauncherActivity extends AppCompatActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    Intent i = new Intent(this, MainActivity.class);
    i.replaceExtras(this.getIntent());
    startActivity(i);
    finish();
  }
}
