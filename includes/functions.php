<?php

    /**
     * Renders template
     */
    function render($template)
    {
        // if template exists, render it
        if (file_exists("templates/$template"))
        {
            require("templates/header.php");
            require("templates/$template");
            require("templates/footer.php");
        }

        // else err
        else
        {
            trigger_error("Invalid template: $template", E_USER_ERROR);
        }
    }

?>