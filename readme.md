# Apuntes de uso sobre GIT
***
Se pretende dejar algunos comando y formas de uso.

## Table de Contenidos
1. [Inspección de un repositorio](#git-status)
2. [Etiquetado](#git-tag)
3. [Historial](#git-log)
4. [Eliminar archivos de un repositorio](#git-rm)

<p>&nbsp;</p>

<a name="git-status"></a>
### Git Status

El comando git status muestra el estado del directorio de trabajo y del área del entorno de ensayo. Permite ver los cambios que se han preparado, los que no y los archivos en los que Git no va a realizar el seguimiento. El resultado del estado no muestra ninguna información relativa al historial del proyecto. Para ello, debes usar git log.

<pre>
<code>git status
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        <span style="color: green; font-weight: bold;">modified:   archivo.txt</span>

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        <span style="color: red; font-weight: bold;">readme.md</span></code>
</pre>

[Referencia](https://www.atlassian.com/es/git/tutorials/inspecting-a-repository)

<p>&nbsp;</p>

<a name="git-tag"></a>
### Git Tag

Las etiquetas son referencias que apuntan a puntos concretos en el historial de Git. Generalmente, el etiquetado se usa para capturar un punto en el historial que se utiliza para una publicación de versión marcada (por ejemplo, v1.0.1). Una etiqueta es como una rama que no cambia. A diferencia de las ramas, las etiquetas, tras crearse, no tienen más historial de confirmaciones. Si quieres más información sobre las ramas, visita la página de git branch.

#### Etiquetas anotadas
Las etiquetas anotadas se almacenan como objetos completos en la base de datos de Git. Para que quede claro, almacenan metadatos adicionales como los siguientes: el nombre de la persona que etiqueta, su correo electrónico y la fecha. Al igual que las confirmaciones y los mensajes de las confirmaciones, las etiquetas anotadas tienen un mensaje de etiquetado. Además, por seguridad, las etiquetas anotadas pueden firmarse y verificarse con GNU Privacy Guard (GPG). La práctica recomendada para el etiquetado de git es dar preferencia a las etiquetas anotadas por encima de las ligeras, para poder tener todos los metadatos asociados.

<pre>
<code>git tag -a v1.4</code>
</pre>

Al ejecutar este comando, se creará una nueva etiqueta anotada identificada como v1.4. A continuación, el comando abrirá el editor de texto predeterminado configurado para solicitar que se introduzcan más metadatos.

<pre>
<code>git tag -a v1.4 -m "my version 1.4"</code>
</pre>

La ejecución de este comando es similar a la invocación anterior; sin embargo, esta versión del comando incluye la opción -m y un mensaje. Se trata de un método útil similar a <span style="color: green; font-weight: bold;">git commit -m</span> que creará inmediatamente una nueva etiqueta y renunciará a abrir el editor de texto local a favor de guardar el mensaje que se pasa con la opción -m.

[Referencia](https://www.atlassian.com/es/git/tutorials/inspecting-a-repository/git-tag)

<p>&nbsp;</p>

<a name="git-log"></a>
### Git Log

El propósito de todo sistema de control de versiones es registrar los cambios hechos en el código. Esto permite volver al historial del proyecto para ver quiénes son los autores, averiguar dónde se introdujeron los errores y revertir los cambios problemáticos. Pero tener todo este historial no sirve de nada si no sabes cómo navegar por él. Ahí es donde entra en juego el comando git log.

A estas alturas, ya deberías conocer el comando git log básico para mostrar confirmaciones. Sin embargo, puedes modificar la salida pasando muchos parámetros diferentes a git log.

Las funciones avanzadas de git log se pueden dividir en dos categorías: dar formato a la salida de las confirmaciones y filtrar qué confirmaciones se incluyen en la salida. En conjunto, estas dos habilidades te permiten volver a tu proyecto y encontrar cualquier información que puedas necesitar.

#### Ejemplo de uso

<pre>
<code>git log --decorate --graph
* <span style="color: yellow">commit 1496f9af66d392c461aa84046e9f79e05d441b73 (</span><span style="color: blue">HEAD -> </span><span style="color: green">master</span><span style="color: yellow">,</span> <span style="color: red">origin/master</span><span style="color: yellow">)</span>
<span style="color: red">|</span> Author: jfuentes3002 <jfuentes3002@gmail.com>
<span style="color: red">|</span> Date:   Wed Oct 11 10:11:04 2023 -0300
<span style="color: red">|</span>
<span style="color: red">|</span>     feat: Varios ejemplos en archivos txt, py, ts y js.
<span style="color: red">|</span>
* <span style="color: yellow">commit 85ff0b6f36e811ce2833e3cea7a6a396b91b0fea</span>
<span style="color: red">|</span> Author: Jorge Fuentes <42352527+jfuentes3002@users.noreply.github.com>
<span style="color: red">|</span> Date:   Tue Oct 10 16:33:35 2023 -0300
<span style="color: red">|</span>
<span style="color: red">|</span>     Update archivo.txt
<span style="color: red">|</span>
* <span style="color: yellow">commit e74cce4b8afe23c239368713262e0429d141740d</span>
<span style="color: red">|</span> Author: jfuentes3002 <jfuentes3002@gmail.com>
<span style="color: red">|</span> Date:   Tue Oct 10 16:24:44 2023 -0300
<span style="color: red">|</span>
<span style="color: red">|</span>     fix: Arreglando texto en archivo de texto.
<span style="color: red">|</span>
* <span style="color: yellow">commit 45779335f7bc32384e397c0d5daa4ccb133208fe</span>
  Author: jfuentes3002 <jfuentes3002@gmail.com>
  Date:   Tue Oct 10 15:41:58 2023 -0300

      Setup inicial del proyecto de prueba.</code>
</pre>

[Referencia](https://www.atlassian.com/es/git/tutorials/git-log)

<p>&nbsp;</p>

<a name="git-rm"></a>
### Git Rm

Una pregunta habitual al empezar a trabajar con Git es "¿Cómo le indico a Git que deje de hacer el seguimiento de un archivo (o varios archivos)?". El comando git rm se usa para eliminar archivos de un repositorio de Git. Se puede considerar que es lo contrario a lo que hace el comando git add.

#### Descripción general
El comando git rm se puede usar para eliminar archivos sueltos o un conjunto de ellos. La función principal de git rm es eliminar los archivos en seguimiento del índice de Git. Además, git rm se puede usar para eliminar archivos tanto del índice del entorno de ensayo como del directorio de trabajo. No existe la opción de eliminar un archivo solo del directorio de trabajo. Los archivos sobre los que se está trabajando deben ser idénticos a los archivos del HEAD actual. Si existe alguna discrepancia entre la versión del HEAD de un archivo y el índice del entorno de ensayo o la versión del árbol de trabajo, Git impedirá que se eliminen los archivos. Se trata de un mecanismo de seguridad para evitar la eliminación de cambios en progreso.

#### Uso
<pre>
<code>&lt;nombre_archivo&gt;…​</code>
</pre>
Especifica los archivos de destino que se van a eliminar. El valor de opción puede ser un archivo individual, una lista de archivos delimitada por espacios file1 file2 file3 o un patrón global de archivos con caracteres comodín (~./directory/*).

<p>&nbsp;</p>
<pre>
<code>-f
--force​</code>
</pre>
La opción -f se usa para invalidar la comprobación de seguridad que Git realiza para garantizar que los archivos en HEAD coinciden con el contenido actual del índice del entorno de ensayo y del directorio de trabajo.

<p>&nbsp;</p>
<pre>
<code>-n
--dry-run​</code>
</pre>
La opción "dry run" es una protección que ejecutará el comando git rm, pero que no elimina realmente los archivos. En realidad, mostrará como resultado los archivos que habría eliminado.

<p>&nbsp;</p>
<pre>
<code>-r​</code>
</pre>
La opción -r es la abreviatura de "recursive". Al trabajar en modo recursivo, git rm eliminará el directorio de destino y todo el contenido de dicho directorio.

<p>&nbsp;</p>
<pre>
<code>--</code>
</pre>
La opción de separador sirve para distinguir de forma explícita entre una lista de nombres de archivo y los argumentos que se van a transmitir a git rm. Esto resulta útil si algunos de los nombres de archivo tienen una sintaxis que pueda ser errónea para otras opciones.

<p>&nbsp;</p>
<pre>
<code>--cached</code>
</pre>
La opción "cached" especifica que la eliminación solo debe realizarse en el índice de entorno de ensayo. Los archivos del directorio de trabajo quedarán aparte.

<p>&nbsp;</p>
<pre>
<code>--ignore-unmatch</code>
</pre>
Esto hace que el comando dé como resultado un estado de sigterm 0 aunque no haya archivos coincidentes. Este es un código de estado de nivel Unix. El código 0 indica una invocación correcta del comando. La opción --ignore-unmatch puede resultar útil cuando se usa git rm dentro de un script de shell mayor que deba fallar de forma elegante.

<p>&nbsp;</p>
<pre>
<code>-q
--quiet</code>
</pre>
La opción "quiet" oculta el resultado del comando git rm. El comando suele dar como resultado una línea para cada archivo eliminado.

#### Ejemplo para sacar un archivo de la zona de stage

<pre>
<code>git rm --cached &lt;nombre_archivo&gt;</code>
</pre>

#### Ejemplo para sacar todos los archivos de la zona de stage

<pre>
<code>git rm --cached .</code>
</pre>

[Referencia](https://www.atlassian.com/es/git/tutorials/undoing-changes/git-rm)


