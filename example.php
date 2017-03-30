#!/usr/bin/php
<?php

/*
 * @param Array $types
 * @abstract Array of allowed file types
 */
$types = Array ('jpeg', 'jpg', 'txt', 'pdf', 'js', 'mp4', 'mp3', 'ogg');

if (!isset($argv[1]))
    exit("Must specify a directory to scan\n");

if (!is_dir($argv[1]))
    exit($argv[1]."' is not a directory\n");

/*
 * @name getList
 * @param Array $dir
 * @param Array $types
 * @abstract Recursively iterates over specified directory
 *           populating array based on array of file extensions
 * @return Array $files
 */
function getList($dir, $types)
{
    $it = new RecursiveDirectoryIterator($dir);
    foreach(new RecursiveIteratorIterator($it) as $file)
    {
        if (in_array(strtolower(array_pop(explode('.', $file))), $types))
            $files[] = $file->__toString();
    }
    return $files;
}

/*
 * @name getDetails
 * @param Array $dir
 * @param Array $types
 * @abstract Recursively iterates over specified directory
 *           populating array with details of each file
 * @return Array $files
 */
function getDetails($types, $array)
{
    foreach($types as $type)
    {
        foreach($array as $file)
        {
            if (strcasecmp($type, array_pop(explode('.', $file))) == 0) {
                $files[$type][basename($file)];
                $files[$type][basename($file)]['source'] = $file;
                $files[$type][basename($file)]['size'] = filesize($file);
            }
        }
    }
    return array('files'=>$files);
}

if (!function_exists('json_encode')) {

    /*
     * @name json_encode
     * @param Mixed $val
     * @abstract Alternate emulated json_encode function
     * @return Object $res
     */
    function json_encode($val)
    {
        if (is_string($val)) return '"'.addslashes($val).'"';
        if (is_numeric($val)) return $val;
        if ($val === null) return 'null';
        if ($val === true) return 'true';
        if ($val === false) return 'false';

        $assoc = false;
        $i = 0;
        foreach ($val as $k=>$v){
            if ($k !== $i++){
                $assoc = true;
                break;
            }
        }
        $res = array();
        foreach ($val as $k=>$v){
            $v = json_encode($v);
            if ($assoc){
                $k = '"'.addslashes($k).'"';
                $v = $k.':'.$v;
            }
            $res[] = $v;
        }
        $res = implode(',', $res);
        return ($assoc)? '{'.$res.'}' : '['.$res.']';
    }
}

/* Run application */
exit(json_encode(getDetails($types, getList($argv[1], $types))));
