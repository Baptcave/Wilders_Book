Yellow learning Typeorm Path:
1 - c'est quoi un ORM ? (object-relational mapping)
    https://fr.wikipedia.org/wiki/Mapping_objet-relationnel

2-  TypeORm ?
https://typeorm.io/

3- Alternatives ?
  Prisma: https://www.prisma.io/
  sequelize: https://sequelize.org/
  Doctroine pour php
  Hibernate pour JAVA

4- les entites:
Entity est une classe qui correspond à une table de base de données.
on peut créer une entité en définissant une nouvelle classe et en la marquant avec @Entity() :
https://typeorm.io/entities#what-is-entity


5- Active Record vs Data Mapper ?
What is the Active Record pattern?
What is the Data Mapper pattern?
Which one should I choose?
https://typeorm.io/active-record-data-mapper

5- Colonne virtuelle:
# @ColonneVirtuelle
Colonne spéciale qui n'est jamais enregistrée dans la base de données et agit donc comme une propriété en lecture seule.
Chaque fois que vous appelez find ou findOne à partir du gestionnaire d'entités, la valeur est recalculée en fonction de la fonction de requête fournie dans VirtualColumn Decorator.
L'argument alias passé à la requête fait référence à l'alias d'entité exact de la requête générée en arrière-plan.

6- Type de colonnes:
https://typeorm.io/entities#column-types
https://typeorm.io/#column-data-types


7- Les "Repository":
https://typeorm.io/working-with-repository#


What's next ?
Relations
relations Eager, lazy

To Do:
1) faire le MLD ( modèle logique des données ) => excalidraw
2) faire un wireframe (exalidraw ou figma ou autres )

 
Dans l'objectif que notre app converge vers un clone de Linkedin:
1- ajouter la possibilité qu'un wilder peut poster un article :
    a) Mettre à jour le MLD
    b) ajouter les entities, controllers
    c) ajouter le frontend ( simple, sans Style ) :
       ajouter une page Home, ou on affiche seulement la liste des posts
       une autre page pour afficher le profile ( page actuel )

Présentation à 12h00 de vos solutions
Correction à 14h et on attaque un nouveau challenge..


