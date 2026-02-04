# SQL Server Integrated Auth (Windows)

The C# connection string you found uses Windows Integrated Authentication:

```
Data Source=CSTFNEUDBDV01,2431;Initial Catalog=EffectiveYieldGB;Integrated Security=SSPI;
```

To use the same approach in Spring Boot:

1. Use the `windows` profile (see `application-windows.yml`).
2. Run the JVM **on Windows** under a domain account that has DB access.
3. Install the Microsoft JDBC driver and ensure the native auth DLL is on the PATH.

## Example (PowerShell)

```powershell
setx SPRING_PROFILES_ACTIVE "windows"
setx DB_URL "jdbc:sqlserver://CSTFNEUDBDV01:2431;databaseName=EffectiveYieldGB;integratedSecurity=true;encrypt=true;trustServerCertificate=true"
```

## Notes
- The native DLL is `sqljdbc_auth.dll` from the Microsoft JDBC driver package.
- On Windows, put the DLL in a directory that is included in the system PATH, or pass:

```
-Djava.library.path=C:\\path\\to\\sqljdbc_auth
```
