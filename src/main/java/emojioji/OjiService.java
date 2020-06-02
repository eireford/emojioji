package emojioji;

import emojioji.Oji;

import javax.inject.Singleton;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

@Singleton
class OjiService {
    private final Map<String, Oji> ojis = new ConcurrentHashMap<>();
    private ArrayList<Emoji> legend;

    public OjiService(EmojiService emojiService) {
        this.legend = new ArrayList<Emoji>( emojiService.allEmojis());
        int grid[][] = {{1,2,3},{4,5,6},{7,8,9}};
        ojis.put("playground", new Oji("playground",grid));
    }

    Collection<Oji> allOjis() {
        return ojis.values();
    }

    Optional<Oji> findOji(@NotBlank String name) {
        return Optional.ofNullable(ojis.get(name));
    }

    Oji saveOji(@NotNull @Valid Oji oji) {
        ojis.put(oji.getName(), oji);
        return oji;
    }

    void deleteOji(@NotBlank String name) {
        ojis.remove(name);
    }
}
