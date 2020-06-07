package emojioji;

import emoji4j.EmojiUtils;
import io.micronaut.test.annotation.MicronautTest;
import org.junit.jupiter.api.Test;

import javax.inject.Inject;

import static org.junit.jupiter.api.Assertions.assertThrows;

@MicronautTest
public class EmojiTest {

    @Inject
    EmojiService emojiService;

    @Test
    public void testNewWithName(){
        Emoji e = new Emoji("smile");
    }

    @Test
    public void testNewWithNameException() throws Exception {
        Exception exception = assertThrows(RuntimeException.class,
                () -> new Emoji("notavalidNameqqq"));
    }

    @Test
    public void testNewWithNameAndCode() throws Exception {
        Emoji e = new Emoji("smile", EmojiUtils.emojify(":smiley:"));
    }

    @Test
    public void testNewNameAndCodeException()  {
        Exception exception = assertThrows(RuntimeException.class,
                () -> new Emoji("smile", EmojiUtils.emojify(":LikelyInvalidEmojiName:")) );
    }

}
