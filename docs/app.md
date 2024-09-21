# Podcast Manager



### Descrição

Um app ao estilo netflix, aonde possa centralizar diferentes episódios de podcasts separados por categoria

### Domínio

Podcasts feitos em vídeo

### Features

- Listar os episódios de podcasts em sessões de categorias
    * [saúde, fitnesse, mentalidade, humor]
- Filtrar os episódios de um podcast específico 

## Como
### Feature:
    Listar os episódios de podcasts em sessões de categorias
#### Como vou implementar:
Vou retornar em uma api rest (json) o nome do podcast, nome do episódio, imagem de capa, link, categories

```json {"id":"01J8ACQ406TVYSYXKJAK7XP204"}
[
    {
        "podcastName": "nome do podcast",
        "episode": "nome do episódio",
        "videoId": "id do video",
        "cover": "link da imagem",
        "link": "link do episodio",
        "categories": [
            "nome da categoria",
            "nome da categoria",
            "nome da categoria"
        ]
    },
    {
        "podcastName": "nome do podcast",
        "episode": "nome do episódio",
        "videoId": "id do video",
        "cover": "link da imagem",
        "link": "link do episodio",
        "categories": [
            "nome da categoria",
            "nome da categoria",
            "nome da categoria"
        ]
    }
]
```