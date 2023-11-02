<!DOCTYPE html>
<html>
<head>
    <title>Directory Listing</title>
</head>
<body>
    <h1>Directory Listing</h1>
    <ul>
        <?php
        $directory = 'https://realpeanut.github.io/games/snes/roms/'; // Replace with the path to your directory
        $files = scandir($directory);
        
        foreach ($files as $file) {
            if ($file !== '.' && $file !== '..') {
                if (is_dir($directory . $file)) {
                    echo '<li><a href="' . $file . '/">' . $file . '/</a></li>';
                } else {
                    echo '<li><a href="' . $file . '">' . $file . '</a></li>';
                }
            }
        }
        ?>
    </ul>
</body>
</html>
