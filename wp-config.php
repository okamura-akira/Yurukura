<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_Yurukura' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'NbgA COp##Q13pQ({I=1E3oGne.:HuXBOEr5}fk;_e7zg|T|-7a{r{b>lO|2.l p' );
define( 'SECURE_AUTH_KEY',  '{#d(k]Xya%QJH|!FxHP{_6lCc93=][}j] OjC.vc0-P{7)*:EJHo2KvdNIbY+D{*' );
define( 'LOGGED_IN_KEY',    'i:LAUhZ~LhD+Xio>F*iW60}e4G4So!Vz31@S-q2~AnfXWI4a1Q%pS@i$D;xo69.4' );
define( 'NONCE_KEY',        'D,M!q)`pvH:p{2h@ltV;[3)ZwH;p<_d@JM=x!.tckS1CqcP;Ki;YvUQw6YRR=iOo' );
define( 'AUTH_SALT',        '9OoqT1ZV~6(d*FX}V~Gm2_o>1R;JuDtf6ND]*6`C++wq(f[aEj=lj5$O?ia-4&q4' );
define( 'SECURE_AUTH_SALT', 'Lt|P2c*r9TY$ ~g^I2rlDB,[ArXmwGF$xkNoH^OUf,bK,eA9pV#3+hGl$P4>z{g.' );
define( 'LOGGED_IN_SALT',   'L2A!jKIsDergB+@hhhQHS7k%fkMy.V6rITBlDAJ{k/Mnn/Kw ~->T@H:~B^qxuAx' );
define( 'NONCE_SALT',       'V!gPs89bm#mWcQ3O}YQ9v)8|~A!@gYn(zdfkb2_Ibc%fq$h3(s:nLF[;i8Y([YhC' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
